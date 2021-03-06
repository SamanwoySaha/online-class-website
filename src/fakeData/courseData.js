let courses = [
    {
        name: 'User Experience Design Essentials - Adobe XD UI UX Design',
        shortName: 'UI UX Design',
        category: 'Graphic Design',
        tag: 'Best Seller',
        instructor: 'Daniel Walter Scott',
        duration: 12,
        lectures: 83,
        coverImage: 'https://i.ibb.co/FHd2dhD/adobe-xd.jpg',
        price: 313.99,
    },
    {
        name: 'Python Bootcamp for Beginners',
        shortName: 'Python Bootcamp',
        category: 'Web Development',
        tag: 'New',
        instructor: 'Micheal Watson',
        duration: 6,
        lectures: 40,
        coverImage: 'https://i.ibb.co/t2cs4MG/python.jpg',
        price: 193.99,
    },
    {
        name: 'SQL Mastery (Zero to Hero)',
        shortName: 'SQL Mastery',
        category: 'Web Development',
        tag: 'Popular',
        instructor: 'Neil Patel',
        duration: 9,
        lectures: 98,
        coverImage: 'https://i.ibb.co/t2cs4MG/python.jpg',
        price: 636.99,
    },
    {
        name: 'React Mastery with 20 Projects',
        shortName: 'Mastering React',
        category: 'Web Development',
        tag: 'Best Seller',
        instructor: 'Brad Travery',
        duration: 10,
        lectures: 70,
        coverImage: 'https://i.ibb.co/xHtyNq9/react.jpg',
        price: 169.99,
    },
    {
        name: 'Build 5 Apps with Flutter',
        shortName: 'Mastering Flutter',
        category: 'Android App Development',
        tag: 'New',
        instructor: 'John Smith',
        duration: 5,
        lectures: 20,
        coverImage: 'https://i.ibb.co/QD9jSrn/flutter.jpg',
        price: 89.99,
    },
    {
        name: 'Data Structure & Algorithm',
        shortName: 'Data Structure & Algorithm',
        category: 'Programming',
        tag: 'New',
        instructor: 'Mosh Hamedani',
        duration: 8,
        lectures: 60,
        coverImage: 'https://i.ibb.co/Fb0NCs1/data-structure.jpg',
        price: 129.99,
    },
    {
        name: 'Advance Bootstrap (Flexbox, Grid, Animation Mastery)',
        shortName: 'Advance Bootstrap',
        category: 'Web Development',
        tag: 'Popular',
        instructor: 'Magnus Carlsen',
        duration: 3,
        lectures: 18,
        coverImage: 'https://i.ibb.co/vV14Fj4/bootstrap.jpg',
        price: 169.99,
    },
    {
        name: 'Angular Mastering from Scratch',
        shortName: 'Mastering Angular',
        category: 'Web Development',
        tag: null,
        instructor: 'Mosh Hamedani',
        duration: 10,
        lectures: 62,
        coverImage: 'https://i.ibb.co/2hQcRM4/angular.jpg',
        price: 250.99,
    },
    {
        name: 'Back End Fundamentals with Django',
        shortName: 'Django Fundamentals',
        category: 'Web Development',
        tag: 'New',
        instructor: 'Walter Kingston',
        duration: 4,
        lectures: 20,
        coverImage: 'https://i.ibb.co/4VswVmz/django.jpg',
        price: 69.99,
    },
    {
        name: 'Fundamentals of Digital Marketing',
        shortName: 'Digital Marketing',
        category: 'Digital Marketing',
        tag: 'Best Seller',
        instructor: 'Khalid Farhan',
        duration: 38,
        lectures: 112,
        coverImage: 'https://i.ibb.co/4YgVLnw/digital-marketing.jpg',
        price: 367.99,
    },
    {
        name: 'Ultimate Drawing Course',
        shortName: 'Drawing',
        category: 'Art',
        tag: null,
        instructor: 'Daniel Walter Scott',
        duration: 3,
        lectures: 16,
        coverImage: 'https://i.ibb.co/CtNMX6V/drawing.jpg',
        price: 20.99,
    },
    {
        name: 'Web Developer Bootcamp 2020',        
        shortName: 'Web Dev Bootcamp', 
        category: 'Web Development',       
        tag: 'Best Seller',
        instructor: 'Angela',
        duration: 7,
        lectures: 65,
        coverImage: 'https://i.ibb.co/HhvrCzV/java.jpg',
        price: 159.99,
    },
    {
        name: 'NodeJS - The Complete Guide (MVC, REST APIs, GraphQL, Deno)',
        shortName: 'NodeJS Mastery',
        category: 'Web Development',
        tag: 'Best Seller',
        instructor: 'Maximillan',
        duration: 6,
        lectures: 44,
        coverImage: 'https://i.ibb.co/CnJybKj/node.jpg',
        price: 198.99,
    },
    {
        name: 'PHP for Beginners - Become a PHP Master - CMS Project',
        shortName: 'PHP for Beginners',
        category: 'Web Development',
        tag: 'Popular',
        instructor: 'Daniel Walter Scott',
        duration: 6,
        lectures: 23,
        coverImage: 'https://i.ibb.co/JpqbSsb/php.jpg',
        price: 56.99,
    },
    {
        name: 'Build Websites with Wordpress',
        shortName: 'Wordpress',
        category: 'Web Development',
        tag: 'Best Seller',
        instructor: 'Md. Salauddin',
        duration: 12,
        lectures: 20,
        coverImage: 'https://i.ibb.co/87sCPhW/wordpress.jpg',
        price: 135.99,
    },
    {
        name: 'Marketing Essentials - Grow Sales Faster',
        shortName: 'Marketing',
        category: 'Digital Marketing',
        tag: null,
        instructor: 'Wesly So',
        duration: 5,
        lectures: 30,
        coverImage: 'https://i.ibb.co/j8xCKWf/finace.jpg',
        price: 199.99,
    },

];

const shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

shuffle(courses);

export default courses;