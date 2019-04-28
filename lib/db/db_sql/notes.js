let notes =
    `create table if not exists notes(
     id INT NOT NULL AUTO_INCREMENT,
     content text NOT NULL COMMENT '用户名',
     tim VARCHAR(100) NOT NULL COMMENT '时间',
     PRIMARY KEY ( id )
    );`;

module.exports = notes;