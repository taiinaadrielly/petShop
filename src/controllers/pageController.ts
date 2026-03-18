import { Request, Response} from 'express';
import {createMenuObject} from '../helpers/createMenuObjects';

export const home = (req: Request, res: Response) => {
    //res.send('home');
    res.render('pages/page', {
         menu: createMenuObject('all'),
        banner:{
            title: 'Todos os animais',
            background:'allanimals.jpg'
        }
    });
};

export const dogs = (req: Request, res: Response) => {
    //res.send('dogs');
    res.render('pages/page', {
         menu: createMenuObject('dogs'),
                 banner:{
            title: 'Cachorro',
            background:'banner_dog.jpg'
        }
    });
};

export const cats = (req: Request, res: Response) => {
    //res.send('cats');
    res.render('pages/page', {
           menu: createMenuObject('cats'),
         banner:{
            title: 'Gatos',
            background:'banner_cat.jpg'
        }
    });
};

export const fishes = (req: Request, res: Response) => {
    //res.send('fishes');
    res.render('pages/page' , {
          menu: createMenuObject('fishes'),
         banner:{
            title: 'Peixes',
            background:'banner_fish.jpg'
        }
    })
}