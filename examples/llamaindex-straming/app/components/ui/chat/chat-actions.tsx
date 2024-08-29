import { PauseCircle, RefreshCw, Eraser } from "lucide-react";

import { Button } from "../button";
import type { ChatHandler } from "./chat.interface";

export default function ChatActions(
  props: Pick<ChatHandler, "stop" | "reload" | "clear"> & {
    showClear?: boolean;
    showReload?: boolean;
    showStop?: boolean;
  },
) {
  return (
    <div className="space-x-4">
      {props.showClear && (
        <Button variant="outline" size="sm" onClick={props.clear}>
          <Eraser className="mr-2 h-4 w-4" />
          Clear
        </Button>
      )}
      {props.showStop && (
        <Button variant="outline" size="sm" onClick={props.stop}>
          <PauseCircle className="mr-2 h-4 w-4" />
          Stop generating
        </Button>
      )}
      {props.showReload && (
        <Button variant="outline" size="sm" onClick={props.reload}>
          <RefreshCw className="mr-2 h-4 w-4" />
          Regenerate
        </Button>
      )}
    </div>
  );
}
