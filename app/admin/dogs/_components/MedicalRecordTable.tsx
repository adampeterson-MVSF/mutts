import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MedicalRecordWithRelations } from "@/lib/actions/medical.actions";
import { missing, formatDisplayDate } from "@/lib/format";

// Component for vaccination details
function VaccinationDetails({ vaccination }: { vaccination: NonNullable<MedicalRecordWithRelations['vaccination']> }) {
  return (
    <div>
      <p><strong>{vaccination.vaccineType}</strong></p>
      {vaccination.nextDueDate && (
        <p className="text-xs">
          Due: {formatDisplayDate(vaccination.nextDueDate)}
        </p>
      )}
    </div>
  );
}

// Component for medication details
function MedicationDetails({ medication }: { medication: NonNullable<MedicalRecordWithRelations['medication']> }) {
  return (
    <div>
      <p><strong>{medication.medicationName}</strong></p>
      <p className="text-xs">
        {medication.dosage} {medication.frequency}
      </p>
    </div>
  );
}

// Component for vet visit details
function VetVisitDetails({ vetVisit }: { vetVisit: NonNullable<MedicalRecordWithRelations['vetVisit']> }) {
  return (
    <div>
      <p><strong>{vetVisit.vetName}</strong></p>
      <p className="text-xs">{vetVisit.visitReason}</p>
    </div>
  );
}

// Component for note details
function NoteDetails({ notes }: { notes: string | null }) {
  return <p>{missing(notes)}</p>;
}

interface MedicalRecordTableProps {
  medicalRecords: MedicalRecordWithRelations[]; // <-- Update this type
}

export default function MedicalRecordTable({ medicalRecords }: MedicalRecordTableProps) {
  const renderRecordDetails = (record: MedicalRecordWithRelations) => {
    if (record.vaccination) {
      return <VaccinationDetails vaccination={record.vaccination} />;
    }
    if (record.medication) {
      return <MedicationDetails medication={record.medication} />;
    }
    if (record.vetVisit) {
      return <VetVisitDetails vetVisit={record.vetVisit} />;
    }
    if (record.type === 'NOTE') {
      return <NoteDetails notes={record.notes} />;
    }
    return null;
  };

  return (
    <>
      {medicalRecords.length === 0 && (
          <p className="text-muted-foreground text-center py-4">No medical records found.</p>
      )}
      {medicalRecords.length > 0 && (
        <Table role="table">
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>Details</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {medicalRecords.map((record) => (
              <TableRow key={record.id}>
                <TableCell>{formatDisplayDate(record.date)}</TableCell>
                <TableCell><Badge variant="secondary">{record.type}</Badge></TableCell>
                <TableCell>
                  {renderRecordDetails(record)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </>
  );
}
