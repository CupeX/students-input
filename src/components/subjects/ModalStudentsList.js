import AddStudentToSubjectList from './AddStudentToSubjectList';
import './Modal.css';

const ModalStudentsList = props => {
  const subjectId = props.subjectId;

  return (
    <div className="Modal">
      <button className="add-btn" onClick={() => props.onCloseModal()}>
        close list
      </button>

      <AddStudentToSubjectList subjectId={subjectId} />
    </div>
  );
};

export default ModalStudentsList;
