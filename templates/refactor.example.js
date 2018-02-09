// WORKSHOP_START
// 39 lineas
exports.manage = function manage(req){

    let pullRequest = req.body.pull_request;
    let pullRequestBody = JSON.parse(pullRequest.body);

    let projectsList = pullRequestBody.project_settings;
    let mainModule = projectsList.find(function(module) { return module.subModule === false; });
    let subModules = projectsList.filter(function(module) { return module.subModule === true; });
    tagsService.createTag(mainModule.prName, pullRequest)
        .then(function onSuccess(response) {
            // TAG CREATION SUCCESS
            let version = response;

            cloudiaService.build(projectsList, pullRequest, version)
                .then(function onSuccess() {

                    if (subModules.length) {
                        // If it is a submodule then do not update the code review status
                        cloudiaService.deploy(subModules.shift(), pullRequest, version)
                            .then(function onSuccess() {

                                if (subModules.length) { // Stop codition
                                    // Recursively call to deploy funcion until the array of submodules is empty
                                    cloudiaService.deploy(subModules.shift(), pullRequest, version);
                                } else {
                                    // Deploy main module
                                    deployMainModule(version);
                                }

                            }).catch(function() {
                                LOGGER.info('[DESPLEGAR] Error deploying subModules.');
                            });
                    } else {
                        // Deploy main module
                        deployMainModule(version);
                    }
                });
        });
}
// WORKSHOP_END

/*************/
/**** V S ****/
/*************/

// FINAL_START
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
// FINAL_END
