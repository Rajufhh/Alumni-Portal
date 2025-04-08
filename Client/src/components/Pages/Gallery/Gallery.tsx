import { WorkInProgress } from "@/components/Utils/WorkInProgress"
import { useAuthorize } from "@/hooks/useAuthorize"

export const Gallery = () => {
  useAuthorize();

  return (
    <WorkInProgress />
  )
}
