"""test mysql

Revision ID: f23e1dff1b5d
Revises: 
Create Date: 2020-05-14 16:24:03.335986

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'f23e1dff1b5d'
down_revision = None
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', sa.Integer(), nullable=False),
    sa.Column('username', sa.String(length=64), nullable=True),
    sa.Column('email', sa.String(length=120), nullable=True),
    sa.Column('password_hash', sa.String(length=128), nullable=True),
    sa.PrimaryKeyConstraint('id')
    )
    op.create_index(op.f('ix_user_email'), 'user', ['email'], unique=True)
    op.create_index(op.f('ix_user_username'), 'user', ['username'], unique=True)
    op.create_table('user_tower_relation',
    sa.Column('user_id', sa.Integer(), nullable=False),
    sa.Column('tower_id', sa.Integer(), nullable=False),
    sa.Column('visited', sa.DateTime(), nullable=True),
    sa.Column('recent', sa.Boolean(), nullable=True),
    sa.Column('creator', sa.Boolean(), nullable=True),
    sa.ForeignKeyConstraint(['tower_id'], ['towerDB.tower_id'], ),
    sa.ForeignKeyConstraint(['user_id'], ['user.id'], ),
    sa.PrimaryKeyConstraint('user_id', 'tower_id')
    )
    op.alter_column('towerDB', 'last_access',
               existing_type=sa.DATE(),
               nullable=False)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('towerDB', 'last_access',
               existing_type=sa.DATE(),
               nullable=True)
    op.drop_table('user_tower_relation')
    op.drop_index(op.f('ix_user_username'), table_name='user')
    op.drop_index(op.f('ix_user_email'), table_name='user')
    op.drop_table('user')
    # ### end Alembic commands ###
