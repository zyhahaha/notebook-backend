let tags =
    `create table if not exists tags(
     id INT NOT NULL AUTO_INCREMENT,
     name VARCHAR(100) NOT NULL COMMENT '标签名',
     color VARCHAR(100) NOT NULL COMMENT '标签色',
     tim VARCHAR(100) NOT NULL COMMENT '时间',
     PRIMARY KEY ( id )
    );`;

module.exports = tags;