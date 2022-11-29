/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import TextFieldComp from './text-field-comp';
import './task-area.css';

export default function TaskArea() {
  return (
    <div className="task-area-task-area">
      <p className="task-area-network-task">Network Task</p>
      <div className="task-area-address">
        <p className="task-area-task-script">Task Script:</p>
        <TextFieldComp text="..." />
      </div>
      <p className="task-area-task-scripts-are-how">
        Task Scripts are how Golem processes whatever you want to do. You can
        make your own scripts in Javascript, or you can use an already made
        script that you trust.
      </p>
      <div className="task-area-frame8">
        <div
          className="task-area-button"
          id="TaskRun"
          onClick={() => {
            window.electron.taskrun('TaskRun');
          }}
        >
          <p className="task-area-run-task">Run Task</p>
        </div>
      </div>
    </div>
  );
}
