export function domInjector(seletor) {
    return function (target, propertyKey) {
        console.log(`Modified prototype ${target.constructor.name} and add getter to ${propertyKey}`);
        let elemento;
        const getter = function () {
            if (!elemento) {
                elemento = document.querySelector(seletor);
                console.log(`Searching DOM elemento with seletor ${seletor} for DOM inject in ${propertyKey}`);
                return elemento;
            }
            return elemento;
        };
        Object.defineProperty(target, propertyKey, { get: getter });
    };
}
//# sourceMappingURL=dom-injector.js.map