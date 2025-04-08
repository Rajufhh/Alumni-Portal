import { WorkInProgress } from "@/components/Utils/WorkInProgress"
import { useAuthorize } from "@/hooks/useAuthorize"

export const Mentor = () => {
  useAuthorize();

  return (
    <WorkInProgress />
  )
}
