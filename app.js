Vue.createApp({
    data() {
        return {
            perspective: 100,
            angleX: 0,
            angleY: 0,
            angleZ: 0
        }
    },
    computed: {
        transformObj() {
            return { 
                transform: `                
                perspective(${this.perspective}px)
                rotateX(${this.angleX}deg)
                rotateY(${this.angleY}deg)
                rotateZ(${this.angleZ}deg)
                `
            }
        }
    },
    methods: {
        reset() {
            this.perspective = 500;
            this.angleX = 0;
            this.angleY = 0;
            this.angleZ = 0;
        },
        copy() {
            const el = document.createElement('textarea')

            el.setAttribute('readonly', '')
            el.style.position = 'absolute'
            el.style.left = '-9999px'
            el.value = `transform: ${this.transformObj.transform}`
            
            document.body.appendChild(el)
            el.select()
            document.execCommand('copy')
            document.body.removeChild(el);
        }
    },
}).mount('#app');