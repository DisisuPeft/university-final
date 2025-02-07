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
        Schema::create('materials_program_files', function (Blueprint $table) {
            $table->id();
            $table->string("title", 255);
            $table->string("content", 255);
            $table->unsignedBigInteger("lesson_id");
            $table->unsignedBigInteger("type_id"); //tipo de file
            $table->string("file_path");
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('materials_program_files');
    }
};
