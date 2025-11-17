import Image from "next/image";
import { TableCell, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { getDogStatusVariant, humanizeEnum } from "@/lib/utils";
import { DeleteDogButton } from "./DeleteDogButton";
import { DogListItem } from "@/lib/types";
import {
  FileText,
  Stethoscope,
} from "lucide-react";
import {
  missing,
  formatDogAge,
  formatDogGender,
  formatDogSize,
  formatDogWeight
} from "@/lib/format";

interface DogTableRowProps {
  dog: DogListItem;
}

export function DogTableRow({ dog }: DogTableRowProps) {
  return (
    <TableRow key={dog.id} data-testid="row-dog">
      <TableCell>
        <Image
          src={dog.primaryPhotoUrl || "https://via.placeholder.com/50x50/f3f4f6/6b7280?text=No+Photo"}
          alt={`Photo of ${dog.name}`}
          width={50}
          height={50}
          className="rounded object-cover"
        />
      </TableCell>
      <TableCell className="font-medium">{dog.name}</TableCell>
      <TableCell>
        <Badge variant={getDogStatusVariant(dog.status)}>
          {humanizeEnum(dog.status)}
        </Badge>
      </TableCell>
      <TableCell>
        {dog.fosterProfile
          ? (dog.fosterProfile.name || dog.fosterProfile.email)
          : missing(null)}
      </TableCell>
      <TableCell>{missing(dog.breed)}</TableCell>
      <TableCell>{formatDogAge(dog.dateOfBirth)}</TableCell>
      <TableCell>{formatDogGender(dog.gender)}</TableCell>
      <TableCell>{formatDogSize(dog.size)}</TableCell>
      <TableCell>{formatDogWeight(dog.weight_lbs)}</TableCell>
      <TableCell className="text-right">
        <div className="flex justify-end gap-2">
          <Button variant="outline" size="sm" asChild>
            <Link
              href={`/admin/dog/${dog.id}/log`}
              title="View Activity Log"
            >
              <FileText className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild>
            <Link
              href={`/admin/dog/${dog.id}?tab=medical`}
              title="Manage Medical Records"
            >
              <Stethoscope className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" size="sm" asChild data-testid="btn-edit-dog">
            <Link href={`/admin/edit-dog/${dog.id}`}>
              Edit
            </Link>
          </Button>
          <div className="w-32">
            <DeleteDogButton dogId={dog.id} dogName={dog.name} />
          </div>
        </div>
      </TableCell>
    </TableRow>
  );
}
