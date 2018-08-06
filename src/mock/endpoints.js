import todos from './todos.json';

export default
/**
* @param match array Result of the resolution of the regular expression
* @param params object sent by 'send' function
* @param headers object set by 'set' function
* @param context object the context of running the fixtures function
*/
function (match, params, headers, context) {
    const route = match[1];
    let result;

    switch (context.method) {
        case 'get':
            result = handleGetRequests(route, params);
            break;

        case 'put':
            result = handlePutRequests(route, params);
            break;

        default:
            result = new Error('bad request');
    }

    return result;
};

/**
 * handler for GET requests
 * @param {String} route
 * @param {Object} params
 */
const handleGetRequests = (route, params) => {
    if (route === '/todos') {
        return todos;
    }
}

/**
 * handler for PUT requests
 * @param {String} route
 * @param {Object} params
 */
const handlePutRequests = (route, params) => {
    if (route === '/todos') {
        const todosRes = todos,
            concreteTodo = todosRes.find(item => item.id === params.id);

        concreteTodo.isCompleted = params.isCompleted;

        return todosRes;
    }
}