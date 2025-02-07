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
        Schema::create('instructor', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('titulo_profesional_id')->nullable();
            $table->unsignedBigInteger('especialidad_id')->nullable();
            $table->text('experiencia')->nullable();
            $table->date('fecha_ingreso');
            $table->enum('status', [0, 1])->default(0);
            $table->unsignedBigInteger('file_id')->nullable();
            $table->unsignedBigInteger("user_id");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('instructor');
    }
};
