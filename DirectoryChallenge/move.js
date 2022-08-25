function Move(state, paths) {
    let key, reference;
    if(paths[0] && paths[1]) {
        let currentDir = state;
        const path = paths[0].split("/");
        for(let idx = 0; idx < path.length; ++idx) {
            const dir = path[idx];
            if(currentDir[dir]) {
                if(idx < path.length - 1) {
                    currentDir = currentDir[dir];
                }
                else {
                    key = dir;
                    reference = currentDir[dir];
                    delete currentDir[dir];
                }
            }
            else {
                console.log(`Cannot move ${paths} - ${dir} does not exist`);
                return;
            }
        }
    }

    if(paths[1] && reference) {
        let currentDir = state;
        const path = paths[1].split("/");
        path.forEach((dir) =>{
            if(!currentDir[dir]) {
                currentDir[dir] = {};
            }
            currentDir = currentDir[dir];
        });

        // what if it already exists?
        currentDir[key] = reference;
    }
}

module.exports = Move