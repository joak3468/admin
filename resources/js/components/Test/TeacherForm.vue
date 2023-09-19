<template>
    <section>
        <h3>Add Profesor</h3>
        <div><label>Nombre:</label><input type="text" v-model="teacher.teacherName"></div>
        <div><label>Apellidos:</label><input type="text" v-model="teacher.surName"></div>
        <div><label>DNI /NIF:</label><input type="text" v-model="teacher.dni"></div>
        <div><label>Materias:</label><input type="text" v-model="subject"> <button @click="handleSubject()">Agregar</button></div>

        <div>
            <ul>
                <li v-for="(ele, index) in teacher.subjects" :key="index">{{ ele }}</li>
            </ul>
        </div>

        <input type="checkbox" v-model="teacher.doc"> Documentacion Entregada
        <button @click="handleTeachear()">Agregar</button>
    </section>



    <section>
        <h3>Listado de profesores</h3>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>DNI /NIF</th>
                <th>Materias</th>
                <th>Documentacion Entregada</th>
            </tr>
            <tr v-for="elm in teachers" :key="elm.dni">
                <th>{{ elm.teacherName }}</th>
                <th>{{ elm.surName }}</th>
                <th>{{ elm.dni }}</th>
                <th>
                    <ul>
                        <li v-for="(item, i) in elm.subjects" :key="i">{{ item }}</li>
                    </ul>
                </th>
                <th v-if="elm.doc">Entregada</th>
                <th v-else>No Entregada</th>
            </tr>
        </table>
    </section>
</template>

<script setup>
    import { ref } from 'vue';

    let teacher = ref({
        teacherName: '',
        surName: '',
        dni: '',
        subjects: [],
        doc: false
    });

    let teachers = ref([]);

    let subject = ref('');

    const handleSubject = () => {
        teacher.value.subjects.push(subject.value);
        subject.value = '';
    };

    const handleTeachear = () =>{
        teachers.value.push({
            teacherName: teacher.value.teacherName,
            surName: teacher.value.dni,
            dni: teacher.value.surName,
            subjects: teacher.value.subjects,
            doc: teacher.value.doc,
        });
        teacher.value.teacherName = "";
        teacher.value.dni = "";
        teacher.value.surName = "";
        teacher.value.subjects = [];
        teacher.value.doc = false;
    }

</script>

<style scoped>

</style>