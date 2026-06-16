import {
    world, system,
    CustomCommand,
    CommandPermissionLevel,
    CustomCommandParamType,
    StartupEvent,
    CustomCommandResult,
    CustomCommandStatus,
    Entity,
    Vector3,
    CustomCommandOrigin,
} from "@minecraft/server";


system.beforeEvents.startup.subscribe((event) => {

    /** @type {CustomCommand} */
    const helloCommand = {
        name: "test:hello",
        description: "",
        permissionLevel: CommandPermissionLevel.Any,
        optionalParameters: [{ type: CustomCommandParamType.Integer, name: "greetingSize" }]
    };
    event.customCommandRegistry.registerCommand(helloCommand, helloCustomCommand);
    
});


function helloCustomCommand(origin, greetingSize = null) {

    //world.sendMessage("Hello Custom Command!");

    if (greetingSize) {

        system.run(() => {

            for (const player of world.getPlayers()) {
                player.sendMessage("Hello other Players!");
            }
            
        });
        
    }

    return {
        status: CustomCommandStatus.Success,
    };
    
}
