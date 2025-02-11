<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('educational_program', function (Blueprint $table) {
            $table->id();
            $table->string('name', 255);
            $table->text('description')->nullable();
            $table->unsignedBigInteger('category_id')->nullable();
            $table->date('start_date')->nullable();
            $table->date('end_date')->nullable();
            $table->time('hour_start')->nullable();
            $table->time('hour_end')->nullable();
            $table->unsignedInteger('duration')->nullable();
            $table->decimal('price', 10, 2)->default(0.00);
            $table->unsignedInteger('max_capacity')->nullable();
            $table->unsignedBigInteger('subcategory_id')->nullable();
            $table->unsignedBigInteger('specification_id')->nullable();
            $table->integer('status')->nullable();
            $table->unsignedBigInteger('user_tutor_id');
            $table->string('image')->nullable(); 
            $table->unsignedBigInteger('niv_edu');
            $table->longText("perfil_ingreso");
            $table->longText("perfil_egreso");
            $table->timestamps();
            //perfil de ingreso, perfil de egreso, nivel educativo(opcional)
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('educational_program');
    }
};
