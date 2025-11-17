"use client";

import { useState } from "react";
import { MedicalRecordType } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { createMedicalRecord, updateMedicalRecord, type MedicalRecordFormData } from "@/lib/actions/medical.actions";
import { PlusCircle } from "lucide-react";

interface MedicalRecordDialogProps {
  dogId: number;
}

export default function MedicalRecordDialog({ dogId }: MedicalRecordDialogProps) {
  const [currentRecord, setCurrentRecord] = useState<MedicalRecordFormData>({
    dogId,
    date: new Date(),
    type: MedicalRecordType.NOTE,
    notes: null,
  });
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formatDateTimeLocal = (date: Date | string | undefined): string => {
    if (!date) return "";
    try {
      const d = new Date(date);
      return d.toISOString().substring(0, 16); // YYYY-MM-DDTHH:MM format
    } catch {
      return "";
    }
  };

  const handleOpenAddDialog = () => {
    setCurrentRecord({
      dogId,
      date: new Date(),
      type: MedicalRecordType.NOTE,
      notes: null,
      vaccination: null,
      medication: null,
      vetVisit: null,
    });
    setSaveError(null);
    setIsFormOpen(true);
  };

  const handleFormChange = (field: string, value: string | Date | MedicalRecordType | null) => {
    setCurrentRecord(prev => {
      // Handle nested fields for satellite data
      if (field.startsWith('vaccination.')) {
        const vaccinationField = field.split('.')[1];
        return {
          ...prev,
          vaccination: {
            ...prev.vaccination,
            vaccineType: prev.vaccination?.vaccineType || '',
            nextDueDate: prev.vaccination?.nextDueDate || null,
            lotNumber: prev.vaccination?.lotNumber || '',
            vetName: prev.vaccination?.vetName || '',
            [vaccinationField]: value
          }
        };
      }
      if (field.startsWith('medication.')) {
        const medicationField = field.split('.')[1];
        return {
          ...prev,
          medication: {
            ...prev.medication,
            medicationName: prev.medication?.medicationName || '',
            dosage: prev.medication?.dosage || null,
            frequency: prev.medication?.frequency || null,
            [medicationField]: value
          }
        };
      }
      if (field.startsWith('vetVisit.')) {
        const vetVisitField = field.split('.')[1];
        return {
          ...prev,
          vetVisit: {
            ...prev.vetVisit,
            vetName: prev.vetVisit?.vetName || null,
            visitReason: prev.vetVisit?.visitReason || '',
            [vetVisitField]: value
          }
        };
      }

      // Handle top-level fields
      return {
        ...prev,
        [field]: value
      };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSaveError(null);

    try {
      if (currentRecord.id) {
        await updateMedicalRecord(currentRecord.id, currentRecord);
      } else {
        await createMedicalRecord(currentRecord);
      }
      setIsFormOpen(false);
      setCurrentRecord({
        dogId,
        date: new Date(),
        type: MedicalRecordType.NOTE,
        notes: null,
        vaccination: null,
        medication: null,
        vetVisit: null,
      });
      setSaveError(null);
    } catch (error) {
      setSaveError(error instanceof Error ? error.message : 'Failed to save medical record');
    } finally {
      setIsSubmitting(false);
    }
  };

  const renderFormFields = () => {
    const recordType = currentRecord.type;
    return (
      <>
        {recordType === MedicalRecordType.VACCINATION && (
          <>
            <div className="grid gap-2">
              <Label htmlFor="vaccineType">Vaccine Type</Label>
              <Input
                id="vaccineType"
                value={currentRecord.vaccination?.vaccineType || ''}
                onChange={(e) => handleFormChange('vaccination.vaccineType', e.target.value)}
                placeholder="e.g., Rabies, DHLPP"
                required
                data-testid="input-vaccine-type"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="nextDueDate">Next Due Date (Optional)</Label>
              <Input
                id="nextDueDate"
                type="date"
                value={currentRecord.vaccination?.nextDueDate ? formatDateTimeLocal(currentRecord.vaccination.nextDueDate).split('T')[0] : ''}
                onChange={(e) => handleFormChange('vaccination.nextDueDate', e.target.value ? new Date(e.target.value) : null)}
                data-testid="input-vaccine-date"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="vaccineLot">Lot Number (Optional)</Label>
              <Input
                id="vaccineLot"
                value={currentRecord.vaccination?.lotNumber || ''}
                onChange={(e) => handleFormChange('vaccination.lotNumber', e.target.value)}
                placeholder="Lot number"
                data-testid="input-vaccine-lot"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="vaccineVet">Vet/Clinic (Optional)</Label>
              <Input
                id="vaccineVet"
                value={currentRecord.vaccination?.vetName || ''}
                onChange={(e) => handleFormChange('vaccination.vetName', e.target.value)}
                placeholder="Vet or clinic name"
                data-testid="input-vaccine-vet"
              />
            </div>
          </>
        )}
        {recordType === MedicalRecordType.MEDICATION && (
          <>
            <div className="grid gap-2">
              <Label htmlFor="medicationName">Medication Name</Label>
              <Input
                id="medicationName"
                value={currentRecord.medication?.medicationName || ''}
                onChange={(e) => handleFormChange('medication.medicationName', e.target.value)}
                placeholder="e.g., Gabapentin"
                required
                data-testid="input-procedure-name"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="procedureDate">Procedure Date</Label>
              <Input
                id="procedureDate"
                type="date"
                value={currentRecord.date ? formatDateTimeLocal(currentRecord.date).split('T')[0] : ''}
                onChange={(e) => handleFormChange('date', e.target.value ? new Date(e.target.value) : new Date())}
                data-testid="input-procedure-date"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="dosage">Dosage</Label>
              <Input
                id="dosage"
                value={currentRecord.medication?.dosage || ''}
                onChange={(e) => handleFormChange('medication.dosage', e.target.value)}
                placeholder="e.g., 100mg, 1 tablet"
                data-testid="input-medication-dosage"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="frequency">Frequency</Label>
              <Input
                id="frequency"
                value={currentRecord.medication?.frequency || ''}
                onChange={(e) => handleFormChange('medication.frequency', e.target.value)}
                placeholder="e.g., Twice daily, As needed"
              />
            </div>
          </>
        )}
        {recordType === MedicalRecordType.VET_VISIT && (
          <>
            <div className="grid gap-2">
              <Label htmlFor="checkupDate">Checkup Date</Label>
              <Input
                id="checkupDate"
                type="date"
                value={currentRecord.date ? formatDateTimeLocal(currentRecord.date).split('T')[0] : ''}
                onChange={(e) => handleFormChange('date', e.target.value ? new Date(e.target.value) : new Date())}
                data-testid="input-checkup-date"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="visitReason">Reason for Visit</Label>
              <Input
                id="visitReason"
                value={currentRecord.vetVisit?.visitReason || ''}
                onChange={(e) => handleFormChange('vetVisit.visitReason', e.target.value)}
                placeholder="e.g., Annual checkup, Limping"
                required
                data-testid="input-checkup-notes"
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="vetName">Vet / Clinic (Optional)</Label>
              <Input
                id="vetName"
                value={currentRecord.vetVisit?.vetName || ''}
                onChange={(e) => handleFormChange('vetVisit.vetName', e.target.value)}
                placeholder="e.g., Dr. Smith @ PA Vet"
                data-testid="input-vet-name"
              />
            </div>
          </>
        )}
      </>
    );
  };

  return (
    <>
      {/* Add Button */}
      <Button onClick={handleOpenAddDialog} data-testid="btn-add-medical-record">
        <PlusCircle className="h-4 w-4 mr-2" />
        Add Medical Record
      </Button>

      {/* --- Single Dialog for Add/Edit --- */}
      <Dialog open={isFormOpen} onOpenChange={(open) => { if(!open) { setIsFormOpen(false); } }}>
        <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>{currentRecord.id ? 'Edit Medical Record' : 'Add New Medical Record'}</DialogTitle>
              <DialogDescription>
                {currentRecord.id ? 'Update the details for this medical record.' : 'Add a new medical record for this dog.'}
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="grid gap-4 py-4">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                   <div className="grid gap-2">
                        <Label htmlFor="recordDate">Date & Time</Label>
                        <Input
                          id="recordDate"
                          type="datetime-local"
                          value={formatDateTimeLocal(currentRecord.date)}
                          onChange={(e) => handleFormChange('date', new Date(e.target.value))}
                          required
                          data-testid="input-visit-date"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="recordType">Record Type</Label>
                        <Select
                          value={currentRecord.type}
                          onValueChange={(value: MedicalRecordType) => handleFormChange('type', value)}
                          disabled={!!currentRecord.id}
                          data-testid="select-record-type"
                        >
                            <SelectTrigger><SelectValue placeholder="Select type" /></SelectTrigger>
                            <SelectContent>
                            {Object.values(MedicalRecordType).map((t) => ( <SelectItem key={t} value={t}>{t}</SelectItem> ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                {renderFormFields()}
                <div className="grid gap-2">
                  <Label htmlFor="notes">Notes</Label>
                  <Textarea
                    id="notes"
                    value={currentRecord.notes || ''}
                    onChange={(e) => handleFormChange('notes', e.target.value)}
                    rows={3}
                    data-testid="textarea-medical-notes"
                  />
                </div>

                {saveError && <p className="text-red-500 text-sm">{saveError}</p>}

                <DialogFooter>
                     <DialogClose asChild>
                        <Button type="button" variant="outline">Cancel</Button>
                     </DialogClose>
                     <Button type="submit" disabled={isSubmitting} data-testid="btn-submit-medical-record">
                       {isSubmitting ? "Saving..." : (currentRecord.id ? "Save Changes" : "Add Record")}
                     </Button>
                </DialogFooter>
            </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
