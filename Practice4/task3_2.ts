interface CanRun {
    run(): void
}

interface CanFly  {
    fly(): void
}

interface CanSwim {
    swim(): void
}

abstract class Creature implements CanRun, CanFly, CanSwim {
    abstract run(): void;
    abstract fly(): void;
    abstract swim(): void
}

class NibiruHuman extends Creature {
    run(): void {
        console.log("Nibiru Human is running.");
    }

    fly(): void {
        console.log("Nibiru Human is not flying.");
    }

    swim(): void {
        console.log("Nibiru Human is not swimming.");
    }
}

class Humans extends Creature {
    run(): void {
        console.log("Humans is running.");
    }

    fly(): void {
        console.log("Humans is not flying.");
    }

    swim(): void {
        console.log("Humans is swimming.");
    }
}

class Kryptonians extends Creature {
    run(): void {
        console.log("Kryptonians is running.");
    }

    fly(): void {
        console.log("Kryptonians is flying.");
    }

    swim(): void {
        console.log("Kryptonians is swimming.");
    }
}

const nibiruHuman = new NibiruHuman();
nibiruHuman.run();
nibiruHuman.fly();
nibiruHuman.swim()

const humans = new Humans();
humans.run();
humans.fly();
humans.swim()

const kryptonians = new Kryptonians();
kryptonians.run();
kryptonians.fly();
kryptonians.swim()