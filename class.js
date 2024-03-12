//클릭하면 떨어지게 만들기 아 미치겠다

document.addEventListener('mouseup', () => {
    console.log('마우스 버튼이 떼어졌습니다.');
    let mouseFollowingSwitch = false
});


class circle {
    constructor(ra, eM, ma, de) {
        this.radius_oneSideLength = ra;
        this.mass = ma;
        this.density = de;
        this.elasticModulus = eM;
        this.shiftDistance = 0;
        this.acceleration = 0;
        this.velocity = 0;
        this.elasticPotentialEnergy = 0;
        this.gravityPotentialEnergy = 0;
        this.kineticEnergy = 0;
        this.mouseFollowing = mouseFollowingSwitch = false ? false : true ;
        this.clickswitch = false; // 클래스 내에서 마우스를 따라가는지 여부를 추적하는 변수 추가
    }

    
      
    draw() {
        
        function freeFall(){
            this.velocity += gravityAcceleration
          }
        freeFall()

        if (this.mouseFollowing == true && this.clickswitch == false) {
            ctx.beginPath();
            ctx.arc(mouseX, mouseY, this.radius_oneSideLength, 0, 2 * Math.PI);
            ctx.stroke();
        }

        else if (this.mouseFollowing == false && this.clickswitch == true){
            ctx.beginPath();
            ctx.arc(mouseX, mouseY-velocity, this.radius_oneSideLength, 0, 2 * Math.PI);
            ctx.stroke();
        }  

    }
}

class square {
    constructor(ra, eM, ma, de) {
        this.radius_oneSideLength = ra;
        this.mass = ma;
        this.density = de;
        this.elasticModulus = eM;
        this.shiftDistance = 0;
        this.acceleration = 0;
        this.velocity = 0;
        this.elasticPotentialEnergy = 0;
        this.gravityPotentialEnergy = 0;
        this.kineticEnergy = 0;
        this.mouseFollowing = true;
        this.clickswitch = false; // 클래스 내에서 마우스를 따라가는지 여부를 추적하는 변수 추가
    }

    freeFall(){
        this.velocity += gravityAcceleration
      }

    draw() {
        if (this.mouseFollowing == true && this.clickswitch == false) {
            ctx.strokeRect(mouseX - this.radius_oneSideLength / 2, mouseY - this.radius_oneSideLength / 2, this.radius_oneSideLength, this.radius_oneSideLength);
        }

        else if (this.mouseFollowing == true && this.clickswitch == false) {
            ctx.strokeRect(mouseX - this.radius_oneSideLength / 2, mouseY - this.radius_oneSideLength / 2, this.radius_oneSideLength, this.radius_oneSideLength);
        }
    }
}


