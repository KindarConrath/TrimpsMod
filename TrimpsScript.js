//CSS
//document.body.checkbox.style


//End CSS


//ToolTips
var abStorage = "onmouseover=\"tooltip(\'Auto-Buy Storage\', \'customText\', event, \'Purchase storage upgrades when a resource is over 90% full.\');\" onmouseout=\"tooltip(\'hide\')\""
var abBuildings = "onmouseover=\"tooltip(\'Auto-Buy Buildings\', \'customText\', event, \'Details to come later.\');\" onmouseout=\"tooltip(\'hide\')\""
var abJobs = "onmouseover=\"tooltip(\'Auto-Buy Jobs\', \'customText\', event, \'Details to come later.\');\" onmouseout=\"tooltip(\'hide\')\""
var abNEUpgrades = "onmouseover=\"tooltip(\'Auto-Buy Upgrades\', \'customText\', event, \'Details to come later.\');\" onmouseout=\"tooltip(\'hide\')\""
var abArmor = "onmouseover=\"tooltip(\'Auto-Buy Armor\', \'customText\', event, \'Details to come later.\');\" onmouseout=\"tooltip(\'hide\')\""
var abWeapons = "onmouseover=\"tooltip(\'Auto-Buy Weapons\', \'customText\', event, \'Details to come later.\');\" onmouseout=\"tooltip(\'hide\')\""
var abArmorUpgrades = "onmouseover=\"tooltip(\'Auto-Buy Armor Upgrades\', \'customText\', event, \'Details to come later.\');\" onmouseout=\"tooltip(\'hide\')\""
var abWeaponUpgrades = "onmouseover=\"tooltip(\'Auto-Buy Weapon Upgrades\', \'customText\', event, \'Details to come later.\');\" onmouseout=\"tooltip(\'hide\')\""
var balGen = "onmouseover=\"tooltip(\'Balance Geneticists\', \'customText\', event, \'Balance Geneticists for this breeding time.\');\" onmouseout=\"tooltip(\'hide\')\""
//End ToolTips

var abStoragePercentage = 0.9;

ShowTooltips=true;

document.getElementById("resourceColumn").innerHTML += ' <input id="chkBuyStorage" ' + abStorage + ' style="left: 50%; top: 50%; position: absolute;" type="checkbox">';
document.getElementById("buildingsTitleSpan").outerHTML += ' <input id="chkBuyBuilding" ' + abBuildings + ' type="checkbox">';
document.getElementById("upgradesTitleSpan").outerHTML += ' <input id="chkBuyUpgrades" ' + abNEUpgrades + ' type="checkbox"> <input id="chkBuyPrestigeH" ' + abArmorUpgrades + ' type="checkbox"><input id="chkBuyPrestigeA" ' + abWeaponUpgrades + ' type="checkbox">';
document.getElementById("equipmentTitleSpan").innerHTML += ' <input id="chkBuyEquipH" ' + abArmor + ' type="checkbox"><input id="chkBuyEquipA" ' + abWeapons + ' type="checkbox">';
document.getElementById("jobsTitleSpan").innerHTML += ' <input id="chkBuyJobs" ' + abJobs + ' type="checkbox"><input id="txtGeneticistTimeLimit" ' + balGen + ' style="width: 40px; height: 30px; color: black;" type="text" value="30"></input>';

AutoBuyStorage=function ()
{
	if (!document.getElementById("chkBuyStorage"))
	{
		document.getElementById("resourceColumn").innerHTML += ' <input id="chkBuyStorage" ' + abStorage + ' style="left: 50%; top: 50%; position: absolute;" type="checkbox">';
	}
	return document.getElementById("chkBuyStorage").checked;
}

AutoBuyBuilding=function ()
{
	if (!document.getElementById("chkBuyBuilding"))
	{
		document.getElementById("buildingsTitleSpan").outerHTML += ' <input id="chkBuyBuilding" ' + abStorage + ' type="checkbox">';
	}
	return document.getElementById("chkBuyBuilding").checked;
}

AutoBuyUpgrades=function ()
{
	if (!document.getElementById("chkBuyUpgrades"))
	{
		document.getElementById("upgradesTitleSpan").outerHTML += ' <input id="chkBuyUpgrades" ' + abNEUpgrades + ' type="checkbox"> <input id="chkBuyPrestigeH" ' + abArmorUpgrades + ' type="checkbox"><input id="chkBuyPrestigeA" ' + abWeaponUpgrades + ' type="checkbox">';
	}
	return document.getElementById("chkBuyUpgrades").checked;
}

AutoBuyEquipH=function ()
{
	if (!document.getElementById("chkBuyEquipH"))
	{
		document.getElementById("equipmentTitleSpan").innerHTML += ' <input id="chkBuyEquipH" ' + abArmor + ' type="checkbox"><input id="chkBuyEquipA" ' + abWeapons + ' type="checkbox">';
	}
	return document.getElementById("chkBuyEquipH").checked;
}
AutoBuyPrestigeH=function ()
{
	if (!document.getElementById("chkBuyPrestigeH"))
	{
		document.getElementById("upgradesTitleSpan").outerHTML += ' <input id="chkBuyUpgrades" ' + abNEUpgrades + ' type="checkbox"> <input id="chkBuyPrestigeH" ' + abArmorUpgrades + ' type="checkbox"><input id="chkBuyPrestigeA" ' + abWeaponUpgrades + ' type="checkbox">';
	}
	return document.getElementById("chkBuyPrestigeH").checked;
}

AutoBuyEquipA=function ()
{
	if (!document.getElementById("chkBuyEquipA"))
	{
		document.getElementById("equipmentTitleSpan").innerHTML += ' <input id="chkBuyEquipH" ' + abArmor + ' type="checkbox"><input id="chkBuyEquipA" ' + abWeapons + ' type="checkbox">';
	}
	return document.getElementById("chkBuyEquipA").checked;
}

AutoBuyPrestigeA=function ()
{
	if (!document.getElementById("chkBuyPrestigeA"))
	{
		document.getElementById("upgradesTitleSpan").outerHTML += ' <input id="chkBuyUpgrades" ' + abNEUpgrades + ' type="checkbox"><input id="chkBuyPrestigeH" ' + abArmorUpgrades + ' type="checkbox"><input id="chkBuyPrestigeA" ' + abWeaponUpgrades + ' type="checkbox">';
	}
	return document.getElementById("chkBuyPrestigeA").checked;
}

AutoBuyJobs=function ()
{
	if (!document.getElementById("chkBuyJobs"))
	{
		document.getElementById("jobsTitleSpan").innerHTML += ' <input id="chkBuyJobs" ' + abJobs + ' type="checkbox"><input id="txtGeneticistTimeLimit" ' + balGen + ' style="width: 40px; height: 30px; color: black;" type="text" value="30"></input>';
	}
	return document.getElementById("chkBuyJobs").checked;
}

GeneticistTimeLimit=function ()
{
	if (!document.getElementById("txtGeneticistTimeLimit"))
	{
				document.getElementById("jobsTitleSpan").innerHTML += ' <input id="chkBuyJobs" ' + abJobs + ' type="checkbox"><input id="txtGeneticistTimeLimit" ' + balGen + ' style="width: 40px; height: 30px; color: black;" type="text" value="30"></input>';
	}
	var BT=parseInt(document.getElementById("txtGeneticistTimeLimit").value) || 3;
	BT=(BT>3 && game.global.challengeActive=="Electricity")?3:BT;
	return BT;
}

OldTooltip=tooltip;

tooltip=function(a,b,c,d,e,f,g,h,i,j,k,l,m)
{
	if (ShowTooltips || a=='hide')
	{
		OldTooltip(a,b,c,d,e,f,g,h,i,j,k,l,m);
	}
}

BuyDaBuilding=function(what)
{
	ShowTooltips=false;
	buyBuilding(what);
	ShowTooltips=true;
}

BuyDaEquip=function(what)
{
	ShowTooltips=false;
	buyEquipment(what);
	ShowTooltips=true;
}

BuyDaUpgrade=function(what)
{
	ShowTooltips=false;
	buyUpgrade(what);
	ShowTooltips=true;
}

TheThings={
		'Dagger':{
			Upgrade: 'Dagadder',
			Stat:'attack',
			Resource:'metal',
			Equip:true
			},
		'Mace':{
			Upgrade: 'Megamace',
			Stat:'attack',
			Resource:'metal',
			Equip:true
			},
		'Polearm':{
			Upgrade: 'Polierarm',
			Stat:'attack',
			Resource:'metal',
			Equip:true
			},
		'Battleaxe':{
			Upgrade: 'Axeidic',
			Stat:'attack',
			Resource:'metal',
			Equip:true
			},
		'Greatsword':{
			Upgrade: 'Greatersword',
			Stat:'attack',
			Resource:'metal',
			Equip:true
			},
		'Boots':{
			Upgrade: 'Bootboost',
			Stat:'health',
			Resource:'metal',
			Equip:true
			},
		'Helmet':{
			Upgrade: 'Hellishmet',
			Stat:'health',
			Resource:'metal',
			Equip:true
			},
		'Pants':{
			Upgrade: 'Pantastic',
			Stat:'health',
			Resource:'metal',
			Equip:true
			},
		'Shoulderguards':{
			Upgrade: 'Smoldershoulder',
			Stat:'health',
			Resource:'metal',
			Equip:true
			},
		'Breastplate':{
			Upgrade: 'Bestplate',
			Stat:'health',
			Resource:'metal',
			Equip:true
			},
		'Arbalest':{
			Upgrade: 'Harmbalest',
			Stat:'attack',
			Resource:'metal',
			Equip:true
		},
		'Gambeson':{
			Upgrade: 'GambesOP',
			Stat:'health',
			Resource:'metal',
			Equip:true
		},
		'Shield':{
			Upgrade: 'Supershield',
			Stat:'health',
			Resource:'wood',
			Equip:true
			},
		'Gym':{
			Upgrade: 'Gymystic',
			Stat:'block',
			Resource:'wood',
			Equip:false
			}
	}
	
function GetObject(what)	
{
	var Thing=TheThings[what];
	return Thing.Equip?game.equipment[what]:game.buildings[what];
}
	
function Factor(what)
{
	var Thing=TheThings[what];
	var Object=GetObject(what);
	if (what=='Shield')
	{
		if (Object.blockNow)
		{
			Thing.Stat='block';
		}
		else
		{
			Thing.Stat='health';
		}
	}
	
	var Eff=Effect(Object,Thing);
	var Cos=Cost(Object,Thing);
	var Res=Eff/Cos;
	var Status='white';
	var Wall=false;
	
	//white - Upgrade is not available
	//yellow - Upgrade is not affordable
	//orange - Upgrade is affordable, but will lower stats
	//red - Yes, do it now!
	if (!game.upgrades[Thing.Upgrade].locked)
	{
		//Evaluating upgrade!
		var CanAfford=canAffordTwoLevel(game.upgrades[Thing.Upgrade]);
		if (Thing.Equip)
		{
			var NextEff=PrestigeValue(Thing.Upgrade);
			var NextCost=getNextPrestigeCost(Thing.Upgrade) * Math.pow(1 - game.portal.Artisanistry.modifier, game.portal.Artisanistry.level);
			Wall=NextEff/NextCost>Res;
		}
		
		if (!CanAfford)
		{
			Status='yellow';
		}
		else
		{
			if (!Thing.Equip)
			{
				//Gymystic is always cool, fuck shield
				Status='red';
			}
			else
			{
				var CurrEff=Object.level*Eff;
				
				var NeedLevel=Math.ceil(CurrEff/NextEff);
				var Ratio=Object.cost[Thing.Resource][1];
				
				var NeedResource=NextCost*(Math.pow(Ratio,NeedLevel)-1)/(Ratio-1);
				
				if (game.resources[Thing.Resource].owned>NeedResource)
				{
					Status='red';
				}
				else
				{
					Status='orange';
				}
			}
		}
	}
	
	return {
		Stat:Thing.Stat,
		Factor:Res,
		Status:Status,
		Wall:Wall
	};
}

function Effect(Object,Thing)
{
	if (Thing.Equip)
	{
		return Object[Thing.Stat+'Calculated'];
	}
	else
	{
		//That be Gym
		var oldBlock = Object.increase.by*Object.owned;
		var Mod=game.upgrades.Gymystic.done?(game.upgrades.Gymystic.modifier + (0.01 * (game.upgrades.Gymystic.done - 1))):1;
		var newBlock=Object.increase.by*(Object.owned+1)*Mod;
		return newBlock-oldBlock;
	}
}

function Cost(Object,Thing)
{
	var price = parseFloat(getBuildingItemPrice(Object, Thing.Resource, Thing.Equip));
	if (Thing.Equip) price = Math.ceil(price * (Math.pow(1 - game.portal.Artisanistry.modifier, game.portal.Artisanistry.level)));
	return price;
}

function PrestigeValue(what)
{
	var name = game.upgrades[what].prestiges;
	var equipment = game.equipment[name];
	var stat;
	if (equipment.blockNow) stat = "block";
	else stat = (typeof equipment.health !== 'undefined') ? "health" : "attack";
	var toReturn = Math.round(equipment[stat] * Math.pow(1.19, ((equipment.prestige) * game.global.prestige[stat]) + 1));
	return toReturn;
}

function EvalAll()
{
	var Best={
		'healthwood':{Factor:0,Name:'',Wall:false,Status:'white'},
		'healthmetal':{Factor:0,Name:'',Wall:false,Status:'white'},
		'attackmetal':{Factor:0,Name:'',Wall:false,Status:'white'},
		'blockwood':{Factor:0,Name:'',Wall:false,Status:'white'},
	};

	for (var what in TheThings)
	{
		var Object=GetObject(what);
		if (!Object.locked)
		{
			document.getElementById(what).style.color='white';
			var Evaluation=Factor(what);
			var BKey=TheThings[what].Stat+TheThings[what].Resource;
			//console.log(BKey);
			if (Best[BKey].Factor==0 || Best[BKey].Factor<Evaluation.Factor)
			{
				Best[BKey].Factor=Evaluation.Factor;
				Best[BKey].Name=what;
				Best[BKey].Wall=Evaluation.Wall;
				Best[BKey].Status=Evaluation.Status;
			}
			document.getElementById(what).style.borderColor=Evaluation.Status;
			if (Evaluation.Status!='white' && Evaluation.Status!='yellow')
			{				
				document.getElementById(TheThings[what].Upgrade).style.color=Evaluation.Status;
			}
			if (Evaluation.Status=='yellow')
			{
				document.getElementById(TheThings[what].Upgrade).style.color='white';
			}
			if (Evaluation.Wall)
			{
				document.getElementById(what).style.color='yellow';
			}
			
			if(
				Evaluation.Status=='red' 
				&& 
				(
					(
						AutoBuyPrestigeA() 
						&& 
						TheThings[what].Stat=='attack'
					)
					||
					(
						AutoBuyPrestigeH() 
						&& 
						(
							TheThings[what].Stat=='health'
							||
							TheThings[what].Stat=='block'
						)
					)
				)
			)
			{
				var upgrade = TheThings[what].Upgrade;
				//console.log('Wanna do upgrade '+upgrade);
				BuyDaUpgrade(upgrade);
			}
		}
	}
	
	for (var stat in Best)
	{
		if (Best[stat].Name!='')
		{
			var DaThing=TheThings[Best[stat].Name];
			document.getElementById(Best[stat].Name).style.color=Best[stat].Wall?'orange':'red';
			if (
					(
						AutoBuyEquipA() 
						&& 
						DaThing.Stat=='attack'
					)
					||
					(
						AutoBuyEquipH() 
						&& 
						(
							DaThing.Stat=='health'
							||
							DaThing.Stat=='block'
						)
					)
				)
			{
				if (DaThing.Equip && !Best[stat].Wall && canAffordBuilding(Best[stat].Name, null, null, true))
				{
					//console.log('Wanna level equip '+Best[stat].Name);
					BuyDaEquip(Best[stat].Name);
				}
			}
		}
	}	
}

setInterval('EvalAll()',250);

Builder={
	Buys: {},
	Start: function(what, counter)
	{
		this.Buys[what]=setInterval(function()
		{
			if (what=='Warpstation') //Special cases!
			{
				if (AutoBuyBuilding() && !game.buildings[what].locked && canAffordBuilding(what))
				{
					//console.log('Wanna buy '+what);
					BuyDaBuilding(what);
				}
				else if (
					(
							counter!=null 
							&& 
							game.buildings[what].owned>=counter+game.upgrades.Gigastation.done*counter/10.0
					) 
					&& 
					AutoBuyUpgrades() 
					&& 
					!game.upgrades.Gigastation.locked
				)
				{					
					if (canAffordTwoLevel(game.upgrades.Gigastation))
					{
						var upgrade = 'Gigastation';
						//console.log('Wanna do upgrade '+upgrade);
						BuyDaUpgrade(upgrade);
					}						
				}
			}
			else if (AutoBuyBuilding() && !game.buildings[what].locked && canAffordBuilding(what))
			{
				if (counter==null || game.buildings[what].purchased<counter)
				{
					if (what=='Collector') // Special cases FTW
					{
						var Coll=game.buildings.Collector;
						var Warp=game.buildings.Warpstation;
						if (!Warp.locked)
						{
							CollGemCost=Coll.cost.gems[0]*Math.pow(Coll.cost.gems[1],Coll.purchased);
							CollEffect=Coll.increase.by/CollGemCost;
							
							WarpGemCost=Warp.cost.gems[0]*Math.pow(Warp.cost.gems[1],Warp.purchased);
							WarpEffect=Warp.increase.by/WarpGemCost;
						}
						if (Warp.locked || CollEffect>WarpEffect || game.resources.gems.owned>CollGemCost+WarpGemCost)
						{
							//console.log('Wanna buy '+what);
							BuyDaBuilding(what);
						}
					}
					else if (what=='Nursery')
					{
						var Wanna=true;
						if (game.jobs.Geneticist.locked && (GetBreedTime()<GeneticistTimeLimit()+1 || game.buildings.Nursery.purchased!=game.buildings.Nursery.owned))
						{
							Wanna=false;
						}
						if (!game.buildings.Collector.locked && !game.global.brokenPlanet && game.buildings.Collector.purchased<game.buildings.Nursery.purchased/10)
						{
							Wanna=false;
						}
						if (Wanna)
						{
							//console.log('Wanna buy '+what);
							BuyDaBuilding(what);
						}
					}
					else 
					{
						//console.log('Wanna buy '+what);
						BuyDaBuilding(what);
					}
				}
			}
		},250);
	},
	Stop: function(what)
	{
		if (this.Buys[what])
		{
			clearInterval(this.Buys[what]);
			delete this.Buys[what];
		}
	}
}

setInterval(function(){
	var packMod = 1+game.portal.Packrat.level * game.portal.Packrat.modifier;
	var Bs={'Barn':'food','Shed':'wood','Forge':'metal'};
	for (var B in Bs)
	{
		if (game.resources[Bs[B]].owned>game.resources[Bs[B]].max*packMod*abStoragePercentage)
		{
			//console.log(B+': '+Bs[B]+' - '+game.resources[Bs[B]].owned+'/'+(game.resources[Bs[B]].max*packMod*0.99));
			if (AutoBuyStorage() && canAffordBuilding(B))
			{
				//console.log('Wanna buy '+B);
				BuyDaBuilding(B);
			}
		}
	}
},
250);

Us=[
		'Coordination',
		'Speedminer',
		'Speedlumber',
		'Speedfarming',
		'Speedscience',
		'Megaminer',
		'Megalumber',
		'Megafarming',
		'Megascience',
		'Efficiency',
		'Potency',
		'TrainTacular',
		'Miners',
		'Scientists',
		'Trainers',
		'Explorers',
		'Blockmaster',
		'Battle',
		'Bloodlust',
		'Bounty',
		'Egg',
		'Anger',
		'Formations',
		'Dominance',
		'Barrier',
		'UberHut',
		'UberHouse',
		'UberMansion',
		'UberHotel',
		'UberResort'
	];

setInterval(function(){
	for (var U in Us)
	{
		var name=Us[U];
		var up=game.upgrades[Us[U]];
		if (AutoBuyUpgrades() && up.allowed>up.done && canAffordTwoLevel(up))
		{
			if (name=='Potency')
			{
				if ((game.jobs.Geneticist.locked && GetBreedTime()>GeneticistTimeLimit()+1) || !game.jobs.Geneticist.locked)
				{
					//console.log('Wanna read '+name);
					BuyDaUpgrade(name);
				}
			}
			else
			{
				if (name!='Coordination')
				{
					//console.log('Wanna read '+name);
				}
				BuyDaUpgrade(name);
			}
		}
	}
},
250);

Builder.Start('Hut',75)
Builder.Start('House',75)
Builder.Start('Gym')
Builder.Start('Mansion',75)
Builder.Start('Hotel',75)
Builder.Start('Resort',75)
Builder.Start('Gateway',20)
Builder.Start('Wormhole',10)
Builder.Start('Collector', 250)
Builder.Start('Warpstation',30)
Builder.Start('Tribute')
Builder.Start('Nursery')

function MaxWorkers()
{
	return Math.ceil(game.resources.trimps.realMax() / 2);
}

function FreeWorkers()
{
	return MaxWorkers()-game.resources.trimps.employed;
}

function canAffordJobLight(what, take, HowMany) {
    var trimps = game.resources.trimps;
	var toBuy = HowMany;
    var job = game.jobs[what];
    for (var costItem in job.cost) {
        if (!checkJobItem(what, take, costItem, null, toBuy)) return false;
    }
	if (take) return toBuy;
    return true;
}

function TryAddGuys(what, HowMany)
{
	var workspaces = FreeWorkers();
	if (workspaces < HowMany) return;
	if (!canAffordJobLight(what, false, HowMany)) return 0;
	var added = canAffordJobLight(what, true, HowMany);
	game.jobs[what].owned += added;
	game.resources.trimps.employed += added;
	return added;
}

function TryRemoveGuys(what, HowMany)
{
	if (game.jobs[what].owned < 1) return 0;
	
	var toR=(game.jobs[what].owned < HowMany) ? game.jobs[what].owned : HowMany;
	
	game.resources.trimps.employed -= toR;
	game.jobs[what].owned -= toR;
	if (game.jobs[what].owned < 0) game.jobs[what].owned = 0;
	if (game.resources.trimps.employed < 0) game.resources.trimps.employed = 0;
	return toR;
}

function canAffordJobLight(what, take, HowMany) {
    var trimps = game.resources.trimps;
	var toBuy = HowMany;
    var job = game.jobs[what];
    for (var costItem in job.cost) {
        if (!checkJobItem(what, take, costItem, null, toBuy)) return false;
    }
	if (take) return toBuy;
    return true;
}

function GetBreedTime()
{
	var trimps = game.resources.trimps;
	var trimpsMax = trimps.realMax();
	var Soldiers= game.portal.Coordinated.level ? game.portal.Coordinated.currentSend: game.resources.trimps.maxSoldiers;
	
    var potencyMod = trimps.potency;
	
	potencyMod += (potencyMod * game.portal.Pheromones.level * game.portal.Pheromones.modifier);
	if (game.jobs.Geneticist.owned > 0) potencyMod *= Math.pow(.98, game.jobs.Geneticist.owned);
	if (game.unlocks.quickTrimps) potencyMod *= 2;
	
	if (!game.global.brokenPlanet) potencyMod *= 10;
	
	var max = Math.ceil((trimpsMax - trimps.employed) * 0.05);
    
	var timeRemaining = log10((trimpsMax - max - trimps.employed) / (trimpsMax - max - Soldiers - trimps.employed)) / log10(1 + (potencyMod / 10));
	
	return timeRemaining;
}

TheJobs=[
	{
		Name:'Explorer',
		Want:1,
		Buffer:0,
		Increase:function(want){return game.jobs.Explorer.owned<100?10:0;}
	},
	{
		Name:'Trainer',
		Want:1,
		Buffer:0,
		Increase:function(want){return Math.ceil((game.jobs.Trainer.owned+1)/100);}
	},
	{
		Name:'Geneticist',
		Want:1,
		Buffer:0,
		Increase:function(want){
			var BT=GeneticistTimeLimit();
			var RBT=GetBreedTime();
			BT=(BT<1)?1:((BT>30?30:BT));
			return (RBT<BT+0.3)?1:((RBT>BT+0.9)?-1:0);
		}
	},
	{
		Name:'Miner',
		Want:0.3,
		Buffer:104,
		Increase:function(want){return Math.ceil(want/10);}
	},
	{
		Name:'Farmer',
		Want:0.3,
		Buffer:102,
		Increase:function(want){return Math.ceil(want/10);}
	},
	{
		Name:'Lumberjack',
		Want:0.3,
		Buffer:100,
		Increase:function(want){return Math.ceil(want/10);}
	},
	{
		Name:'Scientist',
		Want:0.1,
		Buffer:50,
		Increase:function(want){
			return Math.ceil((Math.min(10000,game.jobs.Lumberjack.owned)-game.jobs.Scientist.owned)/10);
		}
	}
];

function JobsTime()
{
	var MaxW=MaxWorkers();
	var FreeW=FreeWorkers();
	for (var TJ in TheJobs)
	{
		var TheJob=TheJobs[TJ];
		if (!game.jobs[TheJob.Name].locked && AutoBuyJobs())
		{
			if (document.getElementById(TheJob.Name))
			{
				var Target=Math.floor((MaxW-TheJob.Buffer)*TheJob.Want);
				var Want=Math.min(FreeW-TheJob.Buffer,TheJob.Increase(Math.min(FreeW-TheJob.Buffer, Target-game.jobs[TheJob.Name].owned)));
				if (Want>0 && game.resources.trimps.owned>MaxWorkers())
				{
					var added=TryAddGuys(TheJob.Name,Want);
					if (added>0)
					{
						//console.log('Want '+Want+' of '+TheJob.Name);
						FreeW-=added;
					}
				}
				else if (Want<0 && TheJob.Name=='Geneticist')
				{
					//console.log('Want '+Want+' of '+TheJob.Name);
					var removed=TryRemoveGuys(TheJob.Name, -Want);
					if (removed>0)
					{
						//console.log('Want '+Want+' of '+TheJob.Name);
						FreeW+=removed;
					}
				}
			}
		}
	}
}

setInterval('JobsTime()',250);

var ManualGather='metal';
var auto=false;
var autoGather='';
function ManualLabor()
{
	//console.log(game.global.buildingsQueue);
	//console.log(game.global.playerModifier);
	if (game.global.playerGathering!='buildings' || game.global.playerGathering!='science')
	{
		ManualGather=game.global.playerGathering;
	}
	if (game.global.buildingsQueue.length > 0 && game.global.buildingsQueue[0].substr(0, game.global.buildingsQueue[0].indexOf('.')) != 'Trap') 
	{
		auto=true;
		autoGather='buildings';
    } 
	else if (game.global.playerModifier*60>game.resources.science.owned && autoGather!='buildings')
	{
		auto=true;
		autoGather='science';
	}
	else
	{
		auto=false;
		autoGather='';
	}
	
	if(auto)
	{
		setGather(autoGather);
	}
	else 
	{ 
		setGather(ManualGather);          			
	}
}

setInterval('ManualLabor()',250);
