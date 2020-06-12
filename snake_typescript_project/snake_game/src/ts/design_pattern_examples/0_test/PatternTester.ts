import GameState from "../5_singleton/GameState";
import { AIController } from "../1_strategy/AIController";
import { NeutralBehaviour } from "../1_strategy/strategies/NeutralBehaviour";
import { FleeingBehaviour } from "../1_strategy/strategies/FleeingBehaviour";
import { ShootingEnemyFactory } from "../2_factory/ShootingEnemyFactory";
import { ExplodingEnemyFactory } from "../2_factory/ExplodingEnemyFactory";
import { ConfigBuilder } from "../3_builder/ConfigBuilder";
import { BulletPool } from "../4_object_pooler/BulletPool";
import { Bullet } from "../4_object_pooler/Bullet";
import { ICalendarAdapter } from "../6_adapter/ICalendarAdapter";
import { OfficeCalendarAdapter } from "../6_adapter/adapters/OfficeCalendarAdapter";
import { OfficeCalendar } from "../6_adapter/adaptees/OfficeCalendar";
import { GoogleCalendarAdapter } from "../6_adapter/adapters/GoogleCalendarAdapter";
import { GoogleCalendar } from "../6_adapter/adaptees/GoogleCalendar";
import { MailFacade } from "../7_facade/MailFacade";
import { MailRepository as MailRepository } from "../7_facade/MailRepository";
import { ContactRepository } from "../7_facade/ContactRepository";
import { Logger } from "../7_facade/Logger";
import { HealthManager } from "../8_observer/observable/HealthManager";
import { UI } from "../8_observer/observer/UI";
import { MovingContext } from "../9_state/MovingContext";
import { EnergeticState } from "../9_state/states/EnergeticState";

export default class PatternTester{
    
    constructor() {
        
    }

    testAll(): void{

        console.log("--- " + this.testStrategyPattern.name + " ---");
        this.testStrategyPattern();

        console.log("--- " + this.testFactoryPattern.name + " ---");
        this.testFactoryPattern();

        console.log("--- " + this.testBuilderPattern.name + " ---");
        this.testBuilderPattern();

        console.log("--- " + this.testObjectPooler.name + " ---");
        this.testObjectPooler();

        console.log("--- " + this.testSingletonPattern.name + " ---");
        this.testSingletonPattern();

        console.log("--- " + this.testAdapterPattern.name + " ---");
        this.testAdapterPattern();

        console.log("--- " + this.testFacadePattern.name + " ---");
        this.testFacadePattern();

        console.log("--- " + this.testObserverPattern.name + " ---");
        this.testObserverPattern();

        console.log("--- " + this.testStatePattern.name + " ---");
        this.testStatePattern();
    }

    private testStatePattern(){
        const movingContext = new MovingContext(new EnergeticState());

        // Moves based on its current state and then changes state
        movingContext.move();
        movingContext.move();
        movingContext.move();
    }

    private testObserverPattern(){
        const ui = new UI();
        const healthManager = new HealthManager(100);

        // Attach and receive first update of initial health
        healthManager.attach(ui);

        // UI receives updates on health changes
        healthManager.takeDamage(20);
        healthManager.takeDamage(20);
        healthManager.regenerateHealth(10);

        healthManager.detach(ui);

        // UI no longer observing, doesn't receive update on health
        healthManager.regenerateHealth(10);
    }

    private testFacadePattern(){
        // We have to perform these actions multiple times across multiple sections in our code
        let contactId = new ContactRepository().getContactId();
        new MailRepository().insertMessage(contactId);
        new Logger().writeLog();

        // Instead, we can use a facade
        new MailFacade().saveMessage();
    }

    private testAdapterPattern(){
        let adapter: ICalendarAdapter = new OfficeCalendarAdapter(new OfficeCalendar());
        adapter.getOccurrences();
        adapter.postOccurrence();

        // Now we try the same methods with Google's API methods, the code will still work
        adapter = new GoogleCalendarAdapter(new GoogleCalendar());
        adapter.getOccurrences();
        adapter.postOccurrence();
    }

    private testObjectPooler(){
        const pool = new BulletPool();

        // Fetch a bullet from the pool or create one if none found
        var bullet = pool.getBullet();

        // Returning the bullet to the pool after it's lifecycle is through
        pool.returnBullet(bullet);

        var bullets = new Array<Bullet>(2);

        // Will reuse the previous fired bullet
        bullets[0] = pool.getBullet();

        // Will make a new bullet and extend the bullet pool to 2 bullets
        bullets[1] = pool.getBullet();

        pool.returnBullet(bullets[0]);
        pool.returnBullet(bullets[1]);
    }

    private testFactoryPattern(){
        // Spawn a shooting enemy
        const shootingEnemyFactory = new ShootingEnemyFactory();
        shootingEnemyFactory.spawnEnemy();

        // Spawn exploding enemy
        const explodingEnemyFactory = new ExplodingEnemyFactory();
        explodingEnemyFactory.spawnEnemy();

        // Just create one, so we can do whatever with it
        const enemy = explodingEnemyFactory.createEnemy();

        // Can't attack, not spawned yet
        enemy.attack();
    }

    private testBuilderPattern(){
        const builder = new ConfigBuilder();

        // Create and print one using chaining
        var config = builder.setLives(4).addPlayerName("Johnny").addPlayerName("Jimmy").addPlayerName("Bobby").getConfig();
        config.printToConsole();

        // Create and print another one using chaining
        config = builder.setLives(2).addPlayerName("Brrrrr").getConfig();
        config.printToConsole();
    }

    private testStrategyPattern(){
        // Create controller and perform behaviour
        const aiController = new AIController(new NeutralBehaviour());
        aiController.doBehaviour();

        // Change strategy
        aiController.setBehaviour(new FleeingBehaviour());

        // Same method called, different output due to different strategy
        aiController.doBehaviour();
    }
    
    // Testing Signleton usage
    private testSingletonPattern(): void {
        const s1 = GameState.getInstance();
        const s2 = GameState.getInstance();
    
        if (s1 === s2) {
            console.log('Singleton works, both variables contain the same instance.');
        } else {
            console.log('Singleton failed, variables contain different instances.');
        }
    }
} 