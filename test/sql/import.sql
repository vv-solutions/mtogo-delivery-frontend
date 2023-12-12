truncate table kitchen.ticket_line cascade;
truncate table kitchen.ticket cascade;
INSERT INTO kitchen.ticket (id, order_id, supplier_id, comment, pickup_time, status, create_stamp)
VALUES
    (1,1, 15, 'Extra cheese', '2023-11-21 11:00:00', 1, '2023-11-21 10:30:00'),
    (2, 2, 15, 'Gluten-free pasta', '2023-11-21 12:15:00', 1, '2023-11-21 11:45:00'),
    (3, 3, 15, 'Extra spicy', '2023-11-21 13:30:00', 1, '2023-11-21 13:00:00'),
    (4, 4, 10, 'Without onions', '2023-11-21 13:30:00', 1, '2023-11-21 13:00:00'),
    (5,5, 10, 'Without tomatoes', '2023-11-21 13:30:00', 1, '2023-11-21 13:00:00'),
    (6,6, 10, '', null, 1, '2023-11-21 13:00:00'),
    (7,7, 10, '', null, 1, '2023-11-21 13:00:00'),
    (8,8, 10, '', null, 1, '2023-11-21 13:00:00'),
    (9,9, 9, '', null, 1, '2023-11-21 13:00:00'),
	(10,10, 16, 'Extra cheese', '2023-11-21 11:00:00', 2, '2023-11-21 10:30:00'),
    (11, 11, 16, 'Gluten-free pasta', '2023-11-21 12:15:00', 2, '2023-11-21 11:45:00'),
    (12, 12, 16, 'Extra spicy', '2023-11-21 13:30:00', 2, '2023-11-21 13:00:00'),
	(13, 13, 8, '', null, 2, '2023-11-21 13:00:00'),
	(14, 14, 11, 'Without onions', '2023-11-21 13:30:00', 2, '2023-11-21 13:00:00'),
    (15,15, 11, 'Without tomatoes', '2023-11-21 13:30:00', 2, '2023-11-21 13:00:00'),
    (16,16, 11, '', null, 2, '2023-11-21 13:00:00'),
    (17,17, 11, '', null, 2, '2023-11-21 13:00:00'),
    (18,18, 11, '', null, 2, '2023-11-21 13:00:00');


INSERT INTO kitchen.ticket_line (product_id, quantity, product_name, ticket_id)
VALUES
    (1, 2, 'Pizza Margherita', 1),
    (2, 1, 'Spaghetti Bolognese', 1),
    (3, 3, 'Chicken Alfredo', 2),
    (4, 2, 'Vegetarian Sushi Roll', 3),
    (5, 1, 'Burger', 4),
    (5, 1, 'Burger', 5),
    (5, 2, 'Burger', 6),
    (5, 2, 'Burger', 7),
    (5, 2, 'Burger', 8),
    (5, 1, 'Burger', 9),
    (5, 1, 'Burger', 9),
	(1, 2, 'Pizza Margherita', 10),
    (2, 1, 'Spaghetti Bolognese', 10),
    (3, 3, 'Chicken Alfredo', 11),
    (4, 2, 'Vegetarian Sushi Roll', 12),
	(5, 1, 'Burger', 13),
    (5, 1, 'Burger', 13),
	(5, 1, 'Burger', 14),
    (5, 1, 'Burger', 15),
    (5, 2, 'Burger', 16),
    (5, 2, 'Burger', 17),
    (5, 2, 'Burger', 18);
