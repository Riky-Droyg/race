// import State from "./Data";

// let ADD_EXPENSES = "ADD_EXPENSES";
// let UPDATE_ONE_CHANGE_ACTIVE_INPUT = "UPDATE_ONE_CHANGE_ACTIVE_INPUT";
// let UPDATE_ONE_CHANGE_ACTIVE_INPUT_NAME = "UPDATE_ONE_CHANGE_ACTIVE_INPUT_NAME";
// let DELETE_EXPENSES = "DELETE_EXPENSES";

// const DebtsReduser = (state = State, action) => {
//     switch (action.type) {
//         case ADD_EXPENSES: {
//             const newExpenses = {
//                 id: state.MainMenu.debets.debets_data.length + 1,
//                 nameDebets: state.MainMenu.activeInputText,
//                 sumDebets: state.MainMenu.activeInputNumber,
//             };
//             const updatedBuisnes = [
//                 ...state.MainMenu.debets.debets_data,
//                 newExpenses,
//             ];
//             const totallExpenses = () => {
//                 return updatedBuisnes.reduce((sum, el) => {
//                     return sum + Number(el.sumDebets);
//                 }, 0);
//             };
//             return {
//                 ...state,
//                 MainMenu: {
//                     ...state.MainMenu,
//                     debets: {
//                         debets_data: [
//                             ...state.MainMenu.debets.debets_data,
//                             newExpenses,
//                         ],
//                         debets_sum: totallExpenses(),
//                     },
//                     activeInputNumber: "",
//                     activeInputText: "",
//                 },
//             };
//         }
//         case DELETE_EXPENSES: {
//             let deleleExpenses = [
//                 ...state.MainMenu.debets.debets_data.slice(0, action.index), // Частина масиву до видаленого елемента
//                 ...state.MainMenu.debets.debets_data.slice(
//                     action.index + 1
//                 ), // Частина масиву після видаленого елемента
//             ];

//             const totallExpenses = () => {
//                 return deleleExpenses.reduce((sum, el) => {
//                     return sum + Number(el.sumDebets);
//                 }, 0);
//             };
//             return {
//                 ...state,
//                 MainMenu: {
//                     ...state.MainMenu,
//                     debets: {
//                         debets_data: [
//                             ...(state.MainMenu.debets.debets_data = deleleExpenses),
//                         ],
//                         debets_sum: totallExpenses(),
//                     },
//                 },
//             };
//         }

//         case UPDATE_ONE_CHANGE_ACTIVE_INPUT: {
//             return {
//                 ...state,
//                 MainMenu: {
//                     ...state.MainMenu,
//                     activeInputNumber: action.text,
//                 },
//             };
//         }
//         case UPDATE_ONE_CHANGE_ACTIVE_INPUT_NAME: {
//             return {
//                 ...state,
//                 MainMenu: {
//                     ...state.MainMenu,
//                     activeInputText: action.text,
//                 },
//             };
//         }

//         default:
//             return state;
//     }
// };

// export default DebtsReduser;

// export let UpdateOneChangeActiveInputAC = (text) => {
//     return {
//         type: UPDATE_ONE_CHANGE_ACTIVE_INPUT,
//         text: text,
//     };
// };
// export let UpdateOneChangeActiveInputNameAC = (text) => {
//     return {
//         type: UPDATE_ONE_CHANGE_ACTIVE_INPUT_NAME,
//         text: text,
//     };
// };
// export let AddExpensesAC = () => {
//     return {
//         type: ADD_EXPENSES,
//     };
// };
// export let DeleleExpensesAC = (index) => {
//     return {
//         type: DELETE_EXPENSES,
//         index: index,
//     };
// };
