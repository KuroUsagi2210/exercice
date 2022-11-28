const cercle = {
     rayon: 5,
     perimetre() {
        return (this.rayon * Math.PI *2)
     },
     surface() {
        return (this.rayon *this.rayon * Math.PI)
     },
};

console.log(`Rayon: ${cercle.rayon}`);
console.log(`Perimetre: ${cercle.perimetre}`);
console.log(`Surface: ${cercle.surface}`);
