import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddTimestampsToTable1749384000000 implements MigrationInterface {
  private readonly tableName = 'pets';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns(this.tableName, [
      new TableColumn({
        name: 'createdAt',
        type: 'timestamp with time zone',
        isNullable: false,
        default: 'now()',
      }),
      new TableColumn({
        name: 'updatedAt',
        type: 'timestamp with time zone',
        isNullable: false,
        default: 'now()',
        onUpdate: 'now()', // Postgres 12+ reconhece onUpdate via TypeORM
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn(this.tableName, 'updatedAt');
    await queryRunner.dropColumn(this.tableName, 'createdAt');
  }
}
