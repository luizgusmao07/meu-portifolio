INSERT INTO projeto (name, description, stack, link, img_url, created_at) VALUES ($1, $2, $3, $4, $5, NOW()) RETURNING *;

