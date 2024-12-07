import { ArrowPathIcon, EyeIcon, PaperAirplaneIcon, PlayIcon } from "@heroicons/react/24/outline";
import { Tooltip } from "@nextui-org/tooltip";
import Link from "next/link";

export function RunWorkflow({ id }: { id: string }) {
    return (
        <Tooltip color="danger" content={"Start"} className="capitalize">
          <Link href={`#`} className="rounded-md border p-2 w-fit h-fit hover:bg-gray-100">
            <PlayIcon className="w-5" />
          </Link>
        </Tooltip>
    );
}

export function RestartWorkflow({ id }: { id: string }) {
  return (
      <Tooltip color="secondary" content={"Restart"} className="capitalize">
        <Link href={`#`} className="rounded-md border p-2 w-fit h-fit hover:bg-gray-100">
          <ArrowPathIcon className="w-5" />
        </Link>
      </Tooltip>
  );
}

export function ViewWorkflow({ id }: { id: string }) {
  return (
      <Tooltip color="primary" content={"View"} className="capitalize">
        <Link href={`#`} className="rounded-md border p-2 w-fit h-fit hover:bg-gray-100">
          <EyeIcon className="w-5" />
        </Link>
      </Tooltip>
  );
}
