document.addEventListener('DOMContentLoaded', function() {
    const escritos = [
        { title: 'Escrito 1', link: 'https://afrofeminas.com/2019/06/20/en-venezuela-la-mujer-negra-si-sufre-discriminacion/' },
        { title: 'Escrito 2', link: 'https://www.canva.com/design/DAGSTklAzqA/VqrmwmULAvesz_0IbT6how/view?utm_content=DAGSTklAzqA&utm_campaign=designshare&utm_medium=link&utm_source=editor' },
        { title: 'Escrito 3', link: 'https://www.canva.com/design/DAGSTsYLUsI/Ns3bnC4-UvExhJW5ydrk9w/view?utm_content=DAGSTsYLUsI&utm_campaign=designshare&utm_medium=link&utm_source=editor' },
        { title: 'Escrito 4', link: 'https://www.canva.com/design/DAGSTlBy9Kk/zuAmrFpsfGmAYFKx4R_Uxw/view?utm_content=DAGSTlBy9Kk&utm_campaign=designshare&utm_medium=link&utm_source=editor' },
        { title: 'Escrito 5', link: 'https://www.canva.com/design/DAGST1VMbeQ/2xIz0zb6uKv_IAP5GfFtYA/view?utm_content=DAGST1VMbeQ&utm_campaign=designshare&utm_medium=link&utm_source=editor' },
        { title: 'Escrito 6', link: 'https://afrofeminas.com/2017/08/12/negrita-voces-afrofeminas/' },
        { title: 'Escrito 7', link: 'https://afrofeminas.com/2018/05/23/pelo-bueno-voces-afrofeminas/' },
        { title: 'Escrito 8', link: 'https://drive.google.com/file/d/1UbxiRhaWsQOgbyXKoM5o28hYVY4apdpj/view?usp=sharing' },
    ];

    const list = document.getElementById('escritos-list');

    escritos.forEach(escrito => {
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = escrito.link;
        a.textContent = escrito.title;
        li.appendChild(a);
        list.appendChild(li);
    });
});
