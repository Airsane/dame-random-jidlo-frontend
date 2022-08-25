import axios from "axios";
import {IRestaurant, Product} from "./Interfaces/RestaurantInterface";

export default class Controller {

    private host: string;
    private static singleton: Controller | null = null;


    constructor(host: string = "http://localhost:3000") {
        if (Controller.singleton)
            throw new Error("Singleton already created");
        this.host = host;
    }

    public static getInstance(): Controller {
        if (!Controller.singleton)
            Controller.singleton = new Controller();
        return Controller.singleton;
    }

    public setHost(url: string): void {
        this.host = url;
    }

    public getHost(): string {
        return this.host
    }

    public async getRandomFood(): Promise<Product> {
        return (await axios.get(this.host + "/random")).data;
    }

    public async loadRestaurant(url: string): Promise<IRestaurant> {
        return (await axios.post(this.host + "/load", {restaurant: url})).data;
    }

    public async getAllFood(): Promise<Product[]> {
        return (await axios.get(this.host + "/food")).data;
    }


}

