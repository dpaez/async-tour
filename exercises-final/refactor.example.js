
/*************/
/**** V S ****/
/*************/

// 30 lineas = menos codigo que mantener
exports.manage = function manage(pullRequest){

    let pullRequestBody = JSON.parse(pullRequest.body);

    let projectsList = pullRequestBody.project_settings;
    let mainModule = projectsList.find(function(module) { return module.subModule === false; });
    let subModules = projectsList.filter(function(module) { return module.subModule === true; });

    function onTagCreation(version) {

        return cloudiaService.build(projectsList, pullRequest, version)
            .then(() => {
                return Promise.all(
                    subModules.map(submodule => {
                        return cloudiaService.deploy(submodule, pullRequest, version)
                    }).concat([
                        deployMainModule(version)
                    ]).catch(err => {
                        LOGGER.info(`[DESPLEGAR] Error deploying subModules: ${err}`);
                    })
                )
            })
    }

    tagsService.createTag(mainModule.prName, pullRequest)
        .then(onTagCreation)
        .catch(err => {
            // Note (dk): Manejar el error, siempre! Ver: https://www.nearform.com/blog/making-promises-safer-in-node-js/
            LOGGER.error(err);
        })
}
