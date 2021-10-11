import { actions } from '../actions/action'

export const setMoviesServer = ({ dispatch, getState }) => next => action => {
    if (action.type === 'SET_MOVIES') {

        let urlData = `${keys.API_URL}${userName}/contact/addDeal`
        let category = action.payload;
        $.ajax({
            url: urlData,
            method: 'POST',
            headers: {
                Authorization: getState().init.jwt
            },
            contentType: "application/json; charset=utf-8",
            data: JSON.stringify(deal),
            success: function (data) {
               
                dispatch(actions.createSystemWave(leadSystemWave))
            },
            error: function (err) {
                console.log(err)
                
            }
        });
    }
    return next(action);
}