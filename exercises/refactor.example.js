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

/*************/
/**** V S ****/
/*************/

