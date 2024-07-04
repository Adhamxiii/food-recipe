import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full min-h-screen bg-black flex justify-center items-center">
      <Skeleton />
    </div>
  );
}
