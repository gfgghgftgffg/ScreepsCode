module.exports = {
    run: function() {
        var harvesterNumPerSource = 3;
        var upgraderNumPerController = 4;
        var builderNumPerRoom = 2;
        var repairerNumPerRoom = 2;

        var harvesterNum = _.sum(Game.creeps, (creep)=>(creep.memory['role'] == 'harvester'));
        var upgraderNum = _.sum(Game.creeps, (creep)=>(creep.memory['role'] == 'upgrader'));
        var builderNum = _.sum(Game.creeps, (creep)=>(creep.memory['role'] == 'builder'));
        var repairerNum = _.sum(Game.creeps, (creep)=>(creep.memory['role'] == 'repairer'));

        if(harvesterNum < harvesterNumPerSource) {
            let name = "Spawn1_harvester" + Game.time%10000;
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE], name,
                { memory:{role:'harvester', fullCarry:'false'}, directions:[RIGHT] });
        }
        else if(upgraderNum < upgraderNumPerController) {
            let name = "Spawn1_upgrader" + Game.time%10000;
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE], name,
                { memory:{role:'upgrader', fullCarry:'false'}, directions:[RIGHT] });
        }
        else if(repairerNum < repairerNumPerRoom) {
            let name = "Spawn1_repairer" + Game.time%10000;
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE], name,
                { memory:{role:'repairer', fullCarry:'false'}, directions:[RIGHT] });
        }
        else if(builderNum < builderNumPerRoom) {
            let name = "Spawn1_builder" + Game.time%10000;
            Game.spawns['Spawn1'].spawnCreep([WORK,WORK,CARRY,MOVE], name,
                { memory:{role:'builder', fullCarry:'false'}, directions:[RIGHT] });
        }
    }

};