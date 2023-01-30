module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('Employee', {
        id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        age: DataTypes.INTEGER,
      },
    {
        timestamps: false, //Essa opção desativa o uso de timestamps (marcas de tempo) para o modelo.
        tebleName: 'employees', //Essa opção define o nome da tabela para "addresses"
        underscored: true, // Essa opção faz com que o nome das colunas da tabela sejam escritos com o formato "snake_case
    });

    Employee.associate = (models) => {
        Employee.hasOne(models.Address, //  método hasOne é usado para definir uma relação um-para-um, mas com a diferença de que o modelo "pai" tem uma chave estrangeira que aponta para o modelo "filho".
            { foreignKey: 'employeeId', as: 'addresses' });
    };

    return Employee;
};