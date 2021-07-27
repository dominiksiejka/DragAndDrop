import { ProjectInput } from "./components/project-input.js";
import { ProjectList } from "./components/project-list.js";
import { createModal } from "./util/modal.js";
new ProjectInput();
new ProjectList("active");
new ProjectList("finished");
createModal();
//# sourceMappingURL=app.js.map