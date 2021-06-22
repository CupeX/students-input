import AddProfToSubjectList from './AddProfToSubjectList';

import './Modal.css';

const ModalProfList = props => {
  const subjectId = props.subjectId;

  return (
    <div className="Modal">
      <button className="add-btn" onClick={() => props.onCloseModal()}>
        close list
      </button>

      <AddProfToSubjectList subjectId={subjectId} />
    </div>
  );
};

export default ModalProfList;
