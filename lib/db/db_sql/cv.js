let cv =
    `create table if not exists cv(
     id INT NOT NULL AUTO_INCREMENT,
     comment text NOT NULL COMMENT 'comment',
     author VARCHAR(100) NOT NULL COMMENT 'author',
     tim VARCHAR(100) NOT NULL COMMENT '时间',
     PRIMARY KEY ( id )
    );`;

module.exports = cv;