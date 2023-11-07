interface Run {
    run(): void
}

interface Fly {
    fly(): void
}

interface Swim {
    swim(): void
}

abstract class HumanAbilities implements Run, Fly, Swim {
    abstract run(): void;
    abstract fly(): void;
    abstract swim(): void
}

class Human extends HumanAbilities {
    run(): void {
        console.log("The human is running.");
    }

    fly(): void {
        console.log("The human is flying.");
    }

    swim(): void {
        console.log("The human is swimming.");
    }
}

const human = new Human();
human.run();
human.fly();
human.swim()