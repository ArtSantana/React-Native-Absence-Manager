export const Types = {
  ADD: 'subjects/ADD',
  EDIT: 'subjects/EDIT',
  REMOVE: 'subjects/REMOVE',
};

const INITIAL_STATE = {
  subjects: [],
};

export default function subjects(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD:
      console.log(state);
      return {...state, subjects: [...state.subjects, action.payload]};
    case Types.REMOVE:
      return {
        ...state,
        subjects: state.subjects.filter(
          (subject) => subject.name != action.payload.name,
        ),
      };
    default:
      return state;
  }
}

export const Creators = {
  add: (name, teacher, maxAbsence, totalAbsence) => ({
    type: Types.ADD,
    payload: {
      name: name,
      teacher: teacher,
      maxAbsence: maxAbsence,
      totalAbsence: totalAbsence,
    },
  }),

  remove: (name) => ({
    type: Types.REMOVE,
    payload: {
      name: name,
    },
  }),
};
