export function domInjector(seletor: string) {
    return function (
        target: any,
        propertyKey: string
    ) {
        console.log(`Modified prototype ${target.constructor.name} and add getter to ${propertyKey}`);
        let elemento: HTMLElement;
        const getter = function () {
            if (!elemento) {
                elemento = <HTMLElement>document.querySelector(seletor);
                console.log(`Searching DOM elemento with seletor ${seletor} for DOM inject in ${propertyKey}`);
                return elemento;
            }
            return elemento;
        }
        Object.defineProperty(
            target,
            propertyKey,
            {get: getter}
        );
    };
}