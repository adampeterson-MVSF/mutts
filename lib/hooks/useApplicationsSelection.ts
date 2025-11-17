import { useState } from "react";

export function useApplicationsSelection() {
  const [selectedApplicationIds, setSelectedApplicationIds] = useState<number[]>([]);

  const handleSelectAll = (checked: boolean, applications: { id: number }[]) => {
    if (checked) {
      setSelectedApplicationIds(applications.map(app => app.id));
    } else {
      setSelectedApplicationIds([]);
    }
  };

  const handleSelectApplication = (applicationId: number, checked: boolean) => {
    if (checked) {
      setSelectedApplicationIds(prev => [...prev, applicationId]);
    } else {
      setSelectedApplicationIds(prev => prev.filter(id => id !== applicationId));
    }
  };

  const isAllSelected = (totalApplications: number) =>
    totalApplications > 0 && selectedApplicationIds.length === totalApplications;

  const isIndeterminate = (totalApplications: number) =>
    selectedApplicationIds.length > 0 && selectedApplicationIds.length < totalApplications;

  const clearSelection = () => setSelectedApplicationIds([]);

  return {
    selectedApplicationIds,
    handleSelectAll,
    handleSelectApplication,
    isAllSelected,
    isIndeterminate,
    clearSelection,
  };
}
