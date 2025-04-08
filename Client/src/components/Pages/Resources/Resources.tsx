import { WorkInProgress } from "@/components/Utils/WorkInProgress"
import { useAuthorize } from "@/hooks/useAuthorize"

export const Resources = () => {
  useAuthorize();

  return (
    <WorkInProgress />
  )
}
