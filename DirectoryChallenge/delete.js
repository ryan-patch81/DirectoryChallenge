const { builtinModules } = require("module");

function Delete(state, args) {
    if(!args || !args.length) return;

    const path = args[0].split("/");
    let currentDir = state;
    for(let idx = 0; idx < path.length ; ++idx) {
        const dir = path[idx];
        if(currentDir[dir]) {
            if(idx < path.length - 1) {
                currentDir = currentDir[dir];
            }
            else {
                delete currentDir[dir];
            }
        }
        else {
            console.log(`Cannot delete ${args[0]} - ${dir} does not exist`);
            return;
        }
    }
}

module.exports = Delete