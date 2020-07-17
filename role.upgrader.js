/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.upgrader');
 * mod.thing == 'a thing'; // true
 */

module.exports = {
    run: function(creep) {
        if(creep.store.energy == creep.store.getCapacity())
            creep.memory['fullCarry'] = true;
        else if(creep.store.energy == 0)
            creep.memory['fullCarry'] = false;
        

        if(!creep.memory['fullCarry']) {
            let source = creep.pos.findClosestByPath(FIND_SOURCES);
            if(creep.harvest(source) == ERR_NOT_IN_RANGE)
                creep.moveTo(source);
        }
        else {
            let controllerInRoom = creep.room.controller;
            if(creep.upgradeController(controllerInRoom) == ERR_NOT_IN_RANGE) {
                creep.moveTo(controllerInRoom);
            }
                
        }
    }

};