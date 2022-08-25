function Create(state, args) {
    if(!args || !args.length) return;

    const path = args[0].split("/");
    let currentDir = state;
    path.forEach(dir => {
        if(!currentDir[dir]) {
            currentDir[dir] = {};
        }
        currentDir = currentDir[dir];
    });
}

module.exports = Create;