"use client";

import LoadingSpinner from "@/components/LoadingSpinner";
import { useForms } from "@/lib/forms";
import { useWorkspace } from "@/lib/workspaces";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import { useRouter } from "next/router";

export default function SettingsPage() {
  const router = useRouter();
  const { forms, isLoadingForms, isErrorForms } = useForms(router.query.workspaceId?.toString());
  const { workspace, isLoadingWorkspace, isErrorWorkspace } = useWorkspace(
    router.query.workspaceId?.toString()
  );

  if (isLoadingForms || isLoadingWorkspace) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <LoadingSpinner />
      </div>
    );
  }

  if (isErrorForms || isErrorWorkspace) {
    return <div>Error loading ressources. Maybe you don&lsquo;t have enough access rights</div>;
  }
  return (
    <div className="mx-auto py-8 sm:px-6 lg:px-8">
      <header className="mb-8">
        <h1 className="text-3xl font-bold leading-tight tracking-tight text-gray-900">
          Settings
          <span className="text-brand-dark ml-4 inline-flex items-center rounded-md border border-teal-100 bg-teal-50 px-2.5 py-0.5 text-sm font-medium">
            {workspace.name}
          </span>
        </h1>
      </header>
      <div className="rounded-md bg-teal-50 p-4">
        <div className="flex">
          <div className="flex-shrink-0">
            <InformationCircleIcon className="h-5 w-5 text-teal-400" aria-hidden="true" />
          </div>
          <div className="ml-3 flex-1 md:flex md:justify-between">
            <p className="text-sm text-teal-700">
              Workspace Management Settings coming to Formbricks HQ soon.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
