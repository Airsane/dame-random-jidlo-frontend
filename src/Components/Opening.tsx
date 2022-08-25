import {Product} from "../App/Interfaces/RestaurantInterface";
import React, {useEffect} from 'react';
import ReactDOM from 'react-dom'
import {clearLine} from "readline";

const Opening = ({products}: { products: Product[] }) => {

    const reset = () => {
        shuffleArray(products);
        document.querySelectorAll('.cardCustom').forEach((product) => {
            product.remove();
        })

        products.forEach((product, i) => {
            if (product.images.length < 1)
                return;
            document.querySelector('#cardList')!.insertAdjacentHTML('beforeend', `<div class="cardCustom" data-rarity="red" id="itemNumber${i}"><img style="object-fit: contain" src="${product.images[0].image_url}?width=500" alt=""></div>`)
        })
    }

    useEffect(() => {
        reset();
    }, [products])

    const random = (min: number, max: number) => {
        return Math.floor((Math.random() * (max - min)) + min);
    }

    const shuffleArray = (array: any[]) => {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    const openCase = () => {
        reset();
        move(document.querySelector('.cardCustom'))
    }

    const move = (elem: any) => {
        let left = 0;
        const randomNumber = random(100, products.length * 100)
        console.log(products[Math.floor(randomNumber / 100) + 4]);
        let speed = 10;

        function frame() {
            if (Math.abs((Math.abs(left) - Math.abs(randomNumber))) < 1600)
                speed = 8;
            if (Math.abs((Math.abs(left) - Math.abs(randomNumber))) < 1200)
                speed = 6;
            if (Math.abs((Math.abs(left) - Math.abs(randomNumber))) < 800)
                speed = 4;
            if (Math.abs((Math.abs(left) - Math.abs(randomNumber))) < 400)
                speed = 2;
            left -= speed;
            elem.style.marginLeft = left + 'px';
            if (left < -randomNumber)
                clearInterval(id);
        }

        const id = setInterval(frame, 2);
    }


    return (<div className="col-md-8 m-auto">
        <div id="unbox-area">
            <div className="arrow-down"></div>
            <div id="cardList"></div>
        </div>
        <button onClick={openCase}>Test</button>
    </div>)
}

export default Opening